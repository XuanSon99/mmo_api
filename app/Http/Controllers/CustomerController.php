<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Models\Profit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Validator;

class CustomerController extends Controller
{
    public function index()
    {
        return Customer::orderBy('created_at', 'DESC')->paginate(10);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'account' => 'required|unique:customers'
        ]);

        if ($validator->fails()) {
            return response()->json(["status" => false, "message" => ["Tài khoản đã tồn tại!"]], 400);
        }

        $data = new Customer([
            'name' => $request->name,
            'account' => $request->account,
            'refferal' => $request->refferal,
            'agency' => $request->agency
        ]);
        $data->save();

        return response()->json(["status" => true, "message" => ["Thêm thành công!"]], 201);
    }

    public function show(Customer $Customer)
    {
        $profit = Profit::where('account', $Customer->account)->orderBy('created_at', 'DESC')->get();

        return response()->json(["status" => true, "data" =>  $profit, "agency" => $Customer->agency], 200);
    }

    public function update(Request $request, Customer $Customer)
    {
        $Customer->update($request->all());
        return response()->json(["status" => true], 200);
    }

    public function destroy(Customer $Customer)
    {
        $Customer->delete();
        return response()->json(["status" => true], 200);
    }

    public function search(Request $request)
    {
        $query = $request->get('query');
        return Customer::where('account', 'like', "%{$query}%")->get();
    }
}
