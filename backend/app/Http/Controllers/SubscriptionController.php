<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Subscription;
use Illuminate\Support\Facades\Auth;

class SubscriptionController extends Controller
{
    public function subscribe(Request $request)
    {
        /** @var \App\Models\User $user **/
        $user = Auth::user();
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

