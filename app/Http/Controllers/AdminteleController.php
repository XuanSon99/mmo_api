<?php

namespace App\Http\Controllers;

use App\Models\Admintele;
use Illuminate\Http\Request;
use Validator;

class AdminteleController extends Controller
{
    public function isAdmin(Request $request)
    {
        $username = $request->route('username');
        $user = Admintele::where('username', $username)->first();
        if($user){
            return 1;
        }
        return 0;
    }
}
