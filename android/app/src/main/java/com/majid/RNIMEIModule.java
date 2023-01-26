package com.rakbank;

import android.Manifest;
import android.content.Context;
import android.telephony.TelephonyManager;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import androidx.core.app.ActivityCompat;

public class RNIMEIModule extends ReactContextBaseJavaModule {

   ReactApplicationContext reactContext;

   public RNIMEIModule(ReactApplicationContext reactContext) {
       super(reactContext);
       this.reactContext = reactContext;
   }

    @Override
    public String getName() {
        return "IMEI";
    }

    @ReactMethod
    public void getIMEI(Promise promise) {
        try {
            
            TelephonyManager tm = (TelephonyManager) this.reactContext.getSystemService(Context.TELEPHONY_SERVICE);
            String imei;
            if (android.os.Build.VERSION.SDK_INT >= 26) {
                imei = tm.getImei().trim();
            } else {
                imei = tm.getDeviceId();
            }
            promise.resolve(imei);
        } catch (SecurityException se) {
            promise.reject(se);
        }
    }
}