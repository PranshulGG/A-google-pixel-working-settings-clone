package com.example.settingsp;

import android.animation.ArgbEvaluator;
import android.animation.ObjectAnimator;
import android.annotation.SuppressLint;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.Uri;
import android.os.BatteryManager;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.provider.Settings;
import android.text.InputType;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.JsPromptResult;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.EditText;
import android.widget.Toast;
import com.google.android.gms.oss.licenses.OssLicensesMenuActivity;


import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private WebView webview;
    private boolean doubleBackToExitPressedOnce = false;

    @Override
    public void onBackPressed() {
        if (webview.canGoBack()) {
            webview.goBack();
        } else {
            if (doubleBackToExitPressedOnce) {
                super.onBackPressed();
                return;
            }

            this.doubleBackToExitPressedOnce = true;
            Toast.makeText(this, "Press again to exit", Toast.LENGTH_SHORT).show();

            new Handler().postDelayed(() -> doubleBackToExitPressedOnce = false, 2000);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);


        setContentView(R.layout.activity_main);



        // Webview stuff
        webview = findViewById(R.id.webView);
        WebSettings webSettings = webview.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccessFromFileURLs(true);
        webSettings.setAllowUniversalAccessFromFileURLs(true);
        webSettings.setAllowContentAccess(true);
        webview.setVerticalScrollBarEnabled(false);
        webview.setHorizontalScrollBarEnabled(false);
        webview.setOverScrollMode(WebView.OVER_SCROLL_NEVER);
        webview.setWebViewClient(new WebViewClientDemo());
        webview.setWebChromeClient(new WebChromeClient());
        webview.setBackgroundColor(getResources().getColor(R.color.bg));
        AndroidInterface androidInterface = new AndroidInterface(this);
        webview.addJavascriptInterface(androidInterface, "AndroidInterface");


        webview.addJavascriptInterface(new BatteryInterface(), "BatteryInterface");





        webview.loadUrl("file:///android_asset/index.html");



        webview.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                new AlertDialog.Builder(view.getContext())
                        .setTitle("Empty Fields")
                        .setMessage(message)
                        .setPositiveButton("alright!", (DialogInterface dialog, int which) -> result.confirm())
                        .setOnDismissListener((DialogInterface dialog) -> result.confirm())
                        .create()
                        .show();
                return true;
            }


            @Override
            public boolean onJsConfirm(WebView view, String url, String message, JsResult result) {
                new AlertDialog.Builder(view.getContext())
                        .setTitle("Confirm delete")
                        .setMessage(message)
                        .setPositiveButton("OK", (DialogInterface dialog, int which) -> result.confirm())
                        .setNegativeButton("Cancel", (DialogInterface dialog, int which) -> result.cancel())
                        .setOnDismissListener((DialogInterface dialog) -> result.cancel())
                        .create()
                        .show();
                return true;
            }

            @Override
            public boolean onJsPrompt(WebView view, String url, String message, String defaultValue, JsPromptResult result) {
                final EditText input = new EditText(view.getContext());
                input.setInputType(InputType.TYPE_CLASS_TEXT);
                input.setText(defaultValue);
                new AlertDialog.Builder(view.getContext())
                        .setTitle("Confirm Delete")
                        .setMessage(message)
                        .setView(input)
                        .setPositiveButton("OK", (DialogInterface dialog, int which) -> result.confirm(input.getText().toString()))
                        .setNegativeButton("Cancel", (DialogInterface dialog, int which) -> result.cancel())
                        .setOnDismissListener((DialogInterface dialog) -> result.cancel())
                        .create()
                        .show();
                return true;
            }
        });


    }

    public class BatteryInterface {
        @JavascriptInterface
        public int getBatteryPercentage() {
            // Get battery percentage
            BatteryManager bm = (BatteryManager)getSystemService(BATTERY_SERVICE);
            if (bm != null) {
                return bm.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY);
            }
            return -1;
        }
    }




    public class AndroidInterface {
        private MainActivity mActivity;

        AndroidInterface(MainActivity activity) {
            mActivity = activity;
        }

        @JavascriptInterface
        public void updateStatusBarColor(final String color) {
            mActivity.runOnUiThread(new Runnable() {
                @SuppressLint("ResourceType")
                @RequiresApi(api = Build.VERSION_CODES.O)
                @Override
                public void run() {
                    int statusBarColor;
                    int navigationBarColor;
                    int systemUiVisibilityFlags = View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR;


                    if (color.equals("Activitybluedark")) {
                        statusBarColor = 0xFF121318;
                        navigationBarColor = 0xFF121318;
                        systemUiVisibilityFlags = 0;


                    } else if (color.equals("Activitybluelight")) {
                        statusBarColor = 0xFFfaf8ff;
                        navigationBarColor = 0xFFfaf8ff;


                    } else if (color.equals("Activitypurplelight")) {
                        statusBarColor = 0xFFfff7fd;
                        navigationBarColor = 0xFFfff7fd;

                    } else if (color.equals("Activitypurpledark")) {
                        statusBarColor = 0xFF161217;
                        navigationBarColor = 0xFF161217;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("Activityyellowlight")) {
                        statusBarColor = 0xFFfdf9ec;
                        navigationBarColor = 0xFFfdf9ec;
                    } else if (color.equals("Activityyellowdark")) {
                        statusBarColor = 0xFF14140c;
                        navigationBarColor = 0xFF14140c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("Activitygreenlight")) {
                        statusBarColor = 0xFFf8fbf1;
                        navigationBarColor = 0xFFf8fbf1;

                    } else if (color.equals("Activitygreendark")) {
                        statusBarColor = 0xFF11140f;
                        navigationBarColor = 0xFF11140f;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("Activityredlight")) {
                        statusBarColor = 0xFFfff8f6;
                        navigationBarColor = 0xFFfff8f6;
                    } else if (color.equals("Activityreddark")) {
                        statusBarColor = 0xFF1a1110;
                        navigationBarColor = 0xFF1a1110;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("ActivityPinklight")) {
                        statusBarColor = 0xFFfff8f8;
                        navigationBarColor = 0xFFfff8f8;
                    } else if (color.equals("ActivityPinkdark")) {
                        statusBarColor = 0xFF191113;
                        navigationBarColor = 0xFF191113;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("ActivityCharcollight")) {
                        statusBarColor = 0xFFf9f9f9;
                        navigationBarColor = 0xFFf9f9f9;

                    } else if (color.equals("ActivityCharcoldark")) {
                        statusBarColor = 0xFF131313;
                        navigationBarColor = 0xFF131313;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("ActivityOrangelight")) {
                        statusBarColor = 0xFFfff8f4;
                        navigationBarColor = 0xFFfff8f4;

                    } else if (color.equals("ActivityOrangedark")) {
                        statusBarColor = 0xFF17130d;
                        navigationBarColor = 0xFF17130d;
                        systemUiVisibilityFlags = 0;

//                        Main-START
                    } else if (color.equals("blue-light")) {
                        statusBarColor = 0xFFfaf8ff;
                        navigationBarColor = 0xFFfaf8ff;
                        setTheme(R.style.blue_light_scheme);


                    } else if (color.equals("blue-dark")) {
                        statusBarColor = 0xFF121318;
                        navigationBarColor = 0xFF121318;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.blue_dark_scheme);

                    } else if (color.equals("purple-light")) {
                        statusBarColor = 0xFFfff7fd;
                        navigationBarColor = 0xFFfff7fd;
                        setTheme(R.style.purple_light_scheme);


                    } else if (color.equals("purple-dark")) {
                        statusBarColor = 0xFF161217;
                        navigationBarColor = 0xFF161217;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.purple_dark_scheme);

                    } else if (color.equals("yellow-light")) {
                        statusBarColor = 0xFFfdf9ec;
                        navigationBarColor = 0xFFfdf9ec;
                        setTheme(R.style.yellow_light_scheme);


                    } else if (color.equals("yellow-dark")) {
                        statusBarColor = 0xFF14140c;
                        navigationBarColor = 0xFF14140c;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.yellow_dark_scheme);


                    } else if (color.equals("green-light")) {
                        statusBarColor = 0xFFf8fbf1;
                        navigationBarColor = 0xFFf8fbf1;
                        setTheme(R.style.green_light_scheme);


                    } else if (color.equals("green-dark")) {
                        statusBarColor = 0xFF11140f;
                        navigationBarColor = 0xFF11140f;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.green_dark_scheme);


                    } else if (color.equals("red-light")) {
                        statusBarColor = 0xFFfff8f6;
                        navigationBarColor = 0xFFfff8f6;
                        setTheme(R.style.red_light_scheme);


                    } else if (color.equals("red-dark")) {
                        statusBarColor = 0xFF1a1110;
                        navigationBarColor = 0xFF1a1110;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.red_dark_scheme);


                    } else if (color.equals("pink-light")) {
                        statusBarColor = 0xFFfff8f8;
                        navigationBarColor = 0xFFfff8f8;
                        setTheme(R.style.pink_light_scheme);


                    } else if (color.equals("pink-dark")) {
                        statusBarColor = 0xFF191113;
                        navigationBarColor = 0xFF191113;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.pink_dark_scheme);


                    } else if (color.equals("charcol-light")) {
                        statusBarColor = 0xFFf9f9f9;
                        navigationBarColor = 0xFFf9f9f9;
                        setTheme(R.style.charcol_light_scheme);


                    } else if (color.equals("charcol-dark")) {
                        statusBarColor = 0xFF131313;
                        navigationBarColor = 0xFF131313;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.charcol_dark_scheme);


                    } else if (color.equals("orange-light")) {
                        statusBarColor = 0xFFfff8f4;
                        navigationBarColor = 0xFFfff8f4;
                        setTheme(R.style.orange_light_scheme);


                    } else if (color.equals("orange-dark")) {
                        statusBarColor = 0xFF17130d;
                        navigationBarColor = 0xFF17130d;
                        systemUiVisibilityFlags = 0;
                        setTheme(R.style.orange_dark_scheme);


//                        scroll colors main-window

                    } else if (color.equals("scroll-blue-dark")) {
                        statusBarColor = 0xFF1e1f25;
                        navigationBarColor = 0xFF1e1f25;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-blue-light")) {
                        statusBarColor = 0xFFeeedf4;
                        navigationBarColor = 0xFFeeedf4;

                    } else if (color.equals("scroll-purple-dark")) {
                        statusBarColor = 0xFF221e24;
                        navigationBarColor = 0xFF221e24;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-purple-light")) {
                        statusBarColor = 0xFFf4ebf3;
                        navigationBarColor = 0xFFf4ebf3;

                    } else if (color.equals("scroll-yellow-dark")) {
                        statusBarColor = 0xFF202018;
                        navigationBarColor = 0xFF202018;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-yellow-light")) {
                        statusBarColor = 0xFFf1eee0;
                        navigationBarColor = 0xFFf1eee0;

                    } else if (color.equals("scroll-green-dark")) {
                        statusBarColor = 0xFF1d211b;
                        navigationBarColor = 0xFF1d211b;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-green-light")) {
                        statusBarColor = 0xFFecefe5;
                        navigationBarColor = 0xFFecefe5;

                    } else if (color.equals("scroll-red-dark")) {
                        statusBarColor = 0xFF271d1c;
                        navigationBarColor = 0xFF271d1c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-red-light")) {
                        statusBarColor = 0xFFfceae7;
                        navigationBarColor = 0xFFfceae7;

                    } else if (color.equals("scroll-pink-dark")) {
                        statusBarColor = 0xFF261d20;
                        navigationBarColor = 0xFF261d20;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-pink-light")) {
                        statusBarColor = 0xFF261d20;
                        navigationBarColor = 0xFF261d20;

                    } else if (color.equals("scroll-charcol-dark")) {
                        statusBarColor = 0xFF1f1f1f;
                        navigationBarColor = 0xFF1f1f1f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-charcol-light")) {
                        statusBarColor = 0xFFeeeeee;
                        navigationBarColor = 0xFFeeeeee;

                    } else if (color.equals("scroll-orange-dark")) {
                        statusBarColor = 0xFF241f19;
                        navigationBarColor = 0xFF241f19;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("scroll-orange-light")) {
                        statusBarColor = 0xFFf8ece2;
                        navigationBarColor = 0xFFf8ece2;

                        //                        scroll colors search-window
                    } else if (color.equals("search-blue-dark")) {
                        statusBarColor = 0xFF1e1f25;
                        navigationBarColor = 0xFF121318;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-blue-light")) {
                        statusBarColor = 0xFFeeedf4;
                        navigationBarColor = 0xFFfaf8ff;

                    } else if (color.equals("search-purple-dark")) {
                        statusBarColor = 0xFF221e24;
                        navigationBarColor = 0xFF161217;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-purple-light")) {
                        statusBarColor = 0xFFf4ebf3;
                        navigationBarColor = 0xFFfff7fd;

                    } else if (color.equals("search-yellow-dark")) {
                        statusBarColor = 0xFF202018;
                        navigationBarColor = 0xFF14140c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-yellow-light")) {
                        statusBarColor = 0xFFf1eee0;
                        navigationBarColor = 0xFFfdf9ec;

                    } else if (color.equals("search-green-dark")) {
                        statusBarColor = 0xFF1d211b;
                        navigationBarColor = 0xFF11140f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-green-light")) {
                        statusBarColor = 0xFFecefe5;
                        navigationBarColor = 0xFFf8fbf1;

                    } else if (color.equals("search-red-dark")) {
                        statusBarColor = 0xFF271d1c;
                        navigationBarColor = 0xFF1a1110;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-red-light")) {
                        statusBarColor = 0xFFfceae7;
                        navigationBarColor = 0xFFfff8f6;

                    } else if (color.equals("search-pink-dark")) {
                        statusBarColor = 0xFF261d20;
                        navigationBarColor = 0xFF191113;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-pink-light")) {
                        statusBarColor = 0xFFfaeaed;
                        navigationBarColor = 0xFFfff8f8;

                    } else if (color.equals("search-charcol-dark")) {
                        statusBarColor = 0xFF1f1f1f;
                        navigationBarColor = 0xFF131313;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-charcol-light")) {
                        statusBarColor = 0xFFeeeeee;
                        navigationBarColor = 0xFFf9f9f9;

                    } else if (color.equals("search-orange-dark")) {
                        statusBarColor = 0xFF241f19;
                        navigationBarColor = 0xFF17130d;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("search-orange-light")) {
                        statusBarColor = 0xFFf8ece2;
                        navigationBarColor = 0xFFfff8f4;


//                        other-fuctions-dialog

                    } else if (color.equals("dialog-blue-light")) {
                        statusBarColor = 0xFF646366;
                        navigationBarColor = 0xFF646366;
                        systemUiVisibilityFlags = 0;



                    } else if (color.equals("dialog-blue-dark")) {
                        statusBarColor = 0xFF07080a;
                        navigationBarColor = 0xFF07080a;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-purple-light")) {
                        statusBarColor = 0xFF666365;
                        navigationBarColor = 0xFF666365;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-purple-dark")) {
                        statusBarColor = 0xFF090709;
                        navigationBarColor = 0xFF090709;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("dialog-yellow-light")) {
                        statusBarColor = 0xFF65645e;
                        navigationBarColor = 0xFF65645e;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-yellow-dark")) {
                        statusBarColor = 0xFF080805;
                        navigationBarColor = 0xFF080805;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-green-light")) {
                        statusBarColor = 0xFF636460;
                        navigationBarColor = 0xFF636460;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-green-dark")) {
                        statusBarColor = 0xFF070806;
                        navigationBarColor = 0xFF070806;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("dialog-red-light")) {
                        statusBarColor = 0xFF666362;
                        navigationBarColor = 0xFF666362;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-red-dark")) {
                        statusBarColor = 0xFF0a0706;
                        navigationBarColor = 0xFF0a0706;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-pink-light")) {
                        statusBarColor = 0xFF666363;
                        navigationBarColor = 0xFF666363;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-pink-dark")) {
                        statusBarColor = 0xFF0a0708;
                        navigationBarColor = 0xFF0a0708;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-charcoal-light")) {
                        statusBarColor = 0xFF646464;
                        navigationBarColor = 0xFF646464;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-charcoal-dark")) {
                        statusBarColor = 0xFF080808;
                        navigationBarColor = 0xFF080808;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-orange-light")) {
                        statusBarColor = 0xFF666362;
                        navigationBarColor = 0xFF666362;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialog-orange-dark")) {
                        statusBarColor = 0xFF090805;
                        navigationBarColor = 0xFF090805;
                        systemUiVisibilityFlags = 0;


//                    inverted-dialog

                    } else if (color.equals("dialogInverted-blue-light")) {
                        navigationBarColor = 0xFF646366;
                        statusBarColor = 0xFF5f5f62;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-blue-dark")) {
                        navigationBarColor = 0xFF07080a;
                        statusBarColor = 0xFF0c0c0f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-purple-light")) {
                        navigationBarColor = 0xFF666365;
                        statusBarColor = 0xFF625e61;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-purple-dark")) {
                        navigationBarColor = 0xFF090709;
                        statusBarColor = 0xFF0e0c0e;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("dialogInverted-yellow-light")) {
                        navigationBarColor = 0xFF65645e;
                        statusBarColor = 0xFF605f5a;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-yellow-dark")) {
                        navigationBarColor = 0xFF080805;
                        statusBarColor = 0xFF0d0d0a;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-green-light")) {
                        navigationBarColor = 0xFF636460;
                        statusBarColor = 0xFF5e605c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-green-dark")) {
                        navigationBarColor = 0xFF070806;
                        statusBarColor = 0xFF0c0d0b;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("dialogInverted-red-light")) {
                        navigationBarColor = 0xFF666362;
                        statusBarColor = 0xFF655e5c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-red-dark")) {
                        navigationBarColor = 0xFF0a0706;
                        statusBarColor = 0xFF100c0b;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-pink-light")) {
                        navigationBarColor = 0xFF666363;
                        statusBarColor = 0xFF645e5f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-pink-dark")) {
                        navigationBarColor = 0xFF0a0708;
                        statusBarColor = 0xFF0f0c0d;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-charcoal-light")) {
                        navigationBarColor = 0xFF646464;
                        statusBarColor = 0xFF5f5f5f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-charcoal-dark")) {
                        navigationBarColor = 0xFF080808;
                        statusBarColor = 0xFF0c0c0c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-orange-light")) {
                        navigationBarColor = 0xFF666362;
                        statusBarColor = 0xFF635e5a;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("dialogInverted-orange-dark")) {
                        navigationBarColor = 0xFF090805;
                        statusBarColor = 0xFF0e0c0a;
                        systemUiVisibilityFlags = 0;

//                        bottom-Sheet

                    } else if (color.equals("sheet-blue-light")) {
                        statusBarColor = 0xFF646366;
                        navigationBarColor = 0xFFf4f3fa;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-blue-dark")) {
                        statusBarColor = 0xFF07080a;
                        navigationBarColor = 0xFF1a1b20;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-purple-light")) {
                        statusBarColor = 0xFF666365;
                        navigationBarColor = 0xFFfaf1f9;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-purple-dark")) {
                        statusBarColor = 0xFF090709;
                        navigationBarColor = 0xFF1e1a20;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("sheet-yellow-light")) {
                        statusBarColor = 0xFF65645e;
                        navigationBarColor = 0xFFf7f4e6;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-yellow-dark")) {
                        statusBarColor = 0xFF080805;
                        navigationBarColor = 0xFF1c1c14;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-green-light")) {
                        statusBarColor = 0xFF636460;
                        navigationBarColor = 0xFFf2f5eb;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-green-dark")) {
                        statusBarColor = 0xFF070806;
                        navigationBarColor = 0xFF191d17;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("sheet-red-light")) {
                        statusBarColor = 0xFF666362;
                        navigationBarColor = 0xFFfff0ee;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-red-dark")) {
                        statusBarColor = 0xFF0a0706;
                        navigationBarColor = 0xFF231918;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-pink-light")) {
                        statusBarColor = 0xFF666363;
                        navigationBarColor = 0xFFfff0f2;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-pink-dark")) {
                        statusBarColor = 0xFF0a0708;
                        navigationBarColor = 0xFF22191c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-charcoal-light")) {
                        statusBarColor = 0xFF646464;
                        navigationBarColor = 0xFFf3f3f3;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-charcoal-dark")) {
                        statusBarColor = 0xFF080808;
                        navigationBarColor = 0xFF1b1b1b;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-orange-light")) {
                        statusBarColor = 0xFF666362;
                        navigationBarColor = 0xFFfef2e8;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheet-orange-dark")) {
                        statusBarColor = 0xFF090805;
                        navigationBarColor = 0xFF201b15;
                        systemUiVisibilityFlags = 0;


//                        sheet in activity

                    } else if (color.equals("sheetInverted-blue-light")) {
                        navigationBarColor = 0xFFf4f3fa;
                        statusBarColor = 0xFF5f5f62;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-blue-dark")) {
                        navigationBarColor = 0xFF1a1b20;
                        statusBarColor = 0xFF0c0c0f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-purple-light")) {
                        navigationBarColor = 0xFFfaf1f9;
                        statusBarColor = 0xFF625e61;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-purple-dark")) {
                        navigationBarColor = 0xFF1e1a20;
                        statusBarColor = 0xFF0e0c0e;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("sheetInverted-yellow-light")) {
                        navigationBarColor = 0xFFf7f4e6;
                        statusBarColor = 0xFF605f5a;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-yellow-dark")) {
                        navigationBarColor = 0xFF1c1c14;
                        statusBarColor = 0xFF0d0d0a;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-green-light")) {
                        navigationBarColor = 0xFFf2f5eb;
                        statusBarColor = 0xFF5e605c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-green-dark")) {
                        navigationBarColor = 0xFF191d17;
                        statusBarColor = 0xFF0c0d0b;
                        systemUiVisibilityFlags = 0;
                    } else if (color.equals("sheetInverted-red-light")) {
                        navigationBarColor = 0xFFfff0ee;
                        statusBarColor = 0xFF655e5c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-red-dark")) {
                        navigationBarColor = 0xFF231918;
                        statusBarColor = 0xFF100c0b;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-pink-light")) {
                        navigationBarColor = 0xFFfff0f2;
                        statusBarColor = 0xFF645e5f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-pink-dark")) {
                        navigationBarColor = 0xFF22191c;
                        statusBarColor = 0xFF0f0c0d;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-charcoal-light")) {
                        navigationBarColor = 0xFFf3f3f3;
                        statusBarColor = 0xFF5f5f5f;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-charcoal-dark")) {
                        navigationBarColor = 0xFF1b1b1b;
                        statusBarColor = 0xFF0c0c0c;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-orange-light")) {
                        navigationBarColor = 0xFFfef2e8;
                        statusBarColor = 0xFF635e5a;
                        systemUiVisibilityFlags = 0;

                    } else if (color.equals("sheetInverted-orange-dark")) {
                        navigationBarColor = 0xFF201b15;
                        statusBarColor = 0xFF0e0c0a;
                        systemUiVisibilityFlags = 0;


//                        settings_open

                    } else if (color.equals("InternetSettings")) {
                        openNetworkSettings(MainActivity.this);
                        return;
                    } else if (color.equals("BlutoothSettings")) {
                        openBluetoothSettings(MainActivity.this);
                        return;
                    } else if (color.equals("AppSettings")) {
                        openAppsSettings(MainActivity.this);
                        return;
                    } else if (color.equals("NavigationSettings")) {
                        openNavigationSettings(MainActivity.this);
                        return;
                    } else if (color.equals("OpenScreenSaver")) {
                        openScreenSaver();
                        return;
                    } else if (color.equals("openGoogleSettings")) {
                        openGoogleSettings(MainActivity.this);

                        return;

                    } else if (color.equals("openStorageSettings")) {
                        openFreeUpSpace(MainActivity.this);
                        return;

                    } else if (color.equals("openDemoEarthQuake")) {
                        openDemoEarthQuake();
                        return;

                    } else if (color.equals("openSystemAppLocation")) {
                        openlocationuse(MainActivity.this);
                        return;
                    } else if (color.equals("OpenSourceLicenses")) {
                            openSourceLicenses();
                            return;

                    } else if (color.equals("OpenSetScreenPattern")) {
                        OpenSetScreenPattern();
                        return;

                    } else if (color.equals("OpenSetScreenPin")) {
                        OpenSetScreenPin();
                        return;

                    } else if (color.equals("OpenSetScreenPassword")) {
                        OpenSetScreenPassword();
                        return;

                } else if (color.equals("crash")) {
                        finish();
                        Toast.makeText(mActivity, "$(string: not defined;)", Toast.LENGTH_LONG).show();
                        return;
                    } else if (color.equals("bluesetDef")) {
                        Toast.makeText(mActivity, "set pop_blue_default", Toast.LENGTH_LONG).show();

                        new Handler().postDelayed(new Runnable() {
                            @Override
                            public void run() {

                                Toast.makeText(mActivity, "error $colorgenerateai.cpp (string: not defined;)", Toast.LENGTH_LONG).show();
                            }
                        }, 2000);

                        return;

                    } else {
                        Toast.makeText(mActivity, "not found", Toast.LENGTH_SHORT).show();
                        return;
                    }


                    int currentStatusBarColor = mActivity.getWindow().getStatusBarColor();
                    int currentNavigationBarColor = mActivity.getWindow().getNavigationBarColor();

                    ObjectAnimator statusBarAnimator = ObjectAnimator.ofObject(
                            mActivity.getWindow(),
                            "statusBarColor",
                            new ArgbEvaluator(),
                            currentStatusBarColor,
                            statusBarColor
                    );

                    statusBarAnimator.setDuration(200);
                    statusBarAnimator.start();

                    ObjectAnimator navBarAnimator = ObjectAnimator.ofObject(
                            mActivity.getWindow(),
                            "navigationBarColor",
                            new ArgbEvaluator(),
                            currentNavigationBarColor,
                            navigationBarColor
                    );

                    navBarAnimator.setDuration(200);
                    navBarAnimator.start();

                    mActivity.getWindow().setNavigationBarColor(navigationBarColor);

                    View decorView = mActivity.getWindow().getDecorView();
                    decorView.setSystemUiVisibility(systemUiVisibilityFlags);


                }
            });
        }

        public void openScreenSaver() {
            Intent intent = new Intent(mActivity, ScreenSaver.class);
            mActivity.startActivity(intent);
        }

        public void openDemoEarthQuake() {
            Intent intent = new Intent(mActivity, earthQuakeAlert.class);
            mActivity.startActivity(intent);
        }

        public void openSourceLicenses() {
            Intent intent = new Intent(mActivity, OssLicensesMenuActivity.class);
            mActivity.startActivity(intent);
        }

        public void OpenSetScreenPattern() {
            Intent intent = new Intent(mActivity, SetPatternScreen.class);
            mActivity.startActivity(intent);
        }

        public void OpenSetScreenPin() {
            Intent intent = new Intent(mActivity, SetPinScreen.class);
            mActivity.startActivity(intent);
        }

        public void OpenSetScreenPassword() {
            Intent intent = new Intent(mActivity, SetPasswordScreen.class);
            mActivity.startActivity(intent);
        }


    }

    public static void openNetworkSettings(Context context) {
        Intent intent = new Intent(Settings.ACTION_WIRELESS_SETTINGS);
        context.startActivity(intent);
    }

    public static void openBluetoothSettings(Context context) {
        Intent intent = new Intent(Settings.ACTION_BLUETOOTH_SETTINGS);
        context.startActivity(intent);
    }

    public static void openAppsSettings(Context context) {
        Intent intent = new Intent(Settings.ACTION_APPLICATION_SETTINGS);
        context.startActivity(intent);
    }

    public static void openNavigationSettings(Context context) {
        Intent intent = new Intent(Settings.ACTION_DISPLAY_SETTINGS);
        context.startActivity(intent);
    }

    public static void openGoogleSettings(Context context) {
        Intent intent = new Intent(Settings.ACTION_ADD_ACCOUNT);
        context.startActivity(intent);
    }

    public static void openFreeUpSpace(Context context) {
        Intent intent = new Intent(Settings.ACTION_INTERNAL_STORAGE_SETTINGS);
        context.startActivity(intent);
    }

    public static void openlocationuse(Context context) {
        Intent intent = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
        context.startActivity(intent);
    }





    private static class WebViewClientDemo extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            if (shouldOpenInBrowser(url)) {
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
                view.getContext().startActivity(intent);
                return true;
            } else {
                view.loadUrl(url);
                return true;
            }
        }

        private boolean shouldOpenInBrowser(String url) {
            return url.startsWith("https://myaccount.google.com");
        }
    }
}
