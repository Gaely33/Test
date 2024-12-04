<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LemonSqueezy\Laravel\Facades\LemonSqueezy;
use App\Models\User;
use App\Models\Subscription;

class PaymentController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
        ]);

        $session = LemonSqueezy::checkoutSessions()->create([
            'email' => $request->email,
            'success_url' => url('/subscribe/success'),
            'cancel_url' => url('/subscribe/cancel'),
        ]);

        return response()->json(['id' => $session->id]);
    }

    public function handleCheckoutSession(Request $request)
    {
        $session = LemonSqueezy::checkoutSessions()->retrieve($request->session_id);
        $customer = $session->customer;

        // Update user subscription status
        $user = User::where('email', $customer->email)->first();
        $user->is_subscribed = true;
        $user->save();

        Subscription::create([
            'user_id' => $user->id,
            'start_date' => now(),
            'end_date' => now()->addYear(),
        ]);

        return response()->json(['message' => 'Subscription activated'], 200);
    }
}

