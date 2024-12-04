<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LemonSqueezy\Laravel\Facades\LemonSqueezy;

class ProductController extends Controller
{
    public function getProducts()
    {
        try {
            $products = LemonSqueezy::products()->all();
            return response()->json($products);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
