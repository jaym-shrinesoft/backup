package ci0;

import java.lang.reflect.Constructor;
import java.lang.reflect.Method;

class Signer {

    private final String strKey;

    private int init_0;
    private int int_1;
    private int int_2;
    private int int_3;


    private int[] int_arr;

    private int init_73;
    private int init_73_2;

    Signer(String str) {
        this.strKey = str;
    }


    private static Class<?>[] copy_objarr_to_new_array_using_iArr_as_index(Object[] objArr, int[] iArr) {
        Class<?>[] clsArr = new Class[iArr.length];
        copy_objarr_to_new_array_using_iArr_as_index_2(objArr, iArr, clsArr);
        return clsArr;
    }

    private static void copy_objarr_to_new_array_using_iArr_as_index_2(Object[] objArr, int[] iArr, Object[] objArr2) {
        for (int i = 0; i < objArr2.length; i++) {
            objArr2[i] = objArr[iArr[i]];
        }
    }

    private char get_random_char() {
        String str = this.strKey;
        int i = this.init_0;
        this.init_0 = i + 1;
        int charAt = str.charAt(i) - '\"';
        int i2 = (this.init_73 * charAt) % 89;
        this.init_73 = charAt;
        this.init_73_2 = i2;
        return (char) (((this.init_73_2 * i2) % 89) + 34);
    }


    private void set_value_of_int_1_2_3_arr_base_on_arg_i(int i) {
        if ((i & 1) != 0) {
            this.int_1 = get_random_char() - 'a';
        }
        if ((i & 4) != 0) {
            this.int_2 = get_random_char() - 'a';
        }
        if ((i & 8) != 0) {
            int c = get_random_char() - '0';
            this.int_arr = new int[c];
            for (int i2 = 0; i2 < c; i2++) {
                this.int_arr[i2] = get_random_char() - 'a';
            }
        }
        this.int_3 = get_random_char() - 'a';
    }


    public Object create(Object... objArr) {  // so we will get an array of object
        
        Object[] objArr2 = new Object[26];  // we allocate an object array of size 26   size of total alphabets
        System.arraycopy(objArr, 0, objArr2, 0, objArr.length); // copy value of objarr to objArr2
        this.init_0 = 0;        
        this.init_73_2 = 73;
        this.init_73 = 73;
        int length = this.strKey.length();  // we get a string when creating object and get that length of the key string
        while (this.init_0 < length) {      // loop through the key string 
            try {
                char c = get_random_char(); // get a random char from the key string
                if (c == '\'') {            // if the char we got is '  then we will create a new string builder and loop until we got ' again
                    StringBuilder sb = new StringBuilder();
                    while (true) {
                        char c2 = get_random_char();    
                        if (c2 == '\'') {
                            break;
                        }
                        sb.append(c2);  // and we will append random chr we got to sb
                    }
                    objArr2[get_random_char() - 'a'] = sb.toString();   // convert sb to string and save it to objArr2
                } else if (c == 'C') {      // if the char we got is C then
                    set_value_of_int_1_2_3_arr_base_on_arg_i(4);     // assign random number to int_2 and int_3 and save value of int_2 in int_3 
                    objArr2[this.int_3] = Class.forName((String) objArr2[this.int_2]);  // get an object by name (probably a string object)
                } else if (c == 'c') {  // if the char we got is c then
                    set_value_of_int_1_2_3_arr_base_on_arg_i(9);    // assign random number to int_2, int_1 and int_arr the create a string object by calling the constructor
                    objArr2[this.int_3] = ((Class) objArr2[this.int_1]).getConstructor(copy_objarr_to_new_array_using_iArr_as_index(objArr2, this.int_arr));
                } else if (c == 'i') {  // if the char we got is i then
                    set_value_of_int_1_2_3_arr_base_on_arg_i(13);   // assign random number to int_2 and int_1 and int_3 and int_arr base on arg
                    int[] iArr = this.int_arr;
                    Object[] objArr3 = new Object[iArr.length]; // create a new array of length 26
                    copy_objarr_to_new_array_using_iArr_as_index_2(objArr2, iArr, objArr3); 
                    Object obj = objArr2[this.int_2];   // get the value of object at objarr index int_2
                    if (obj instanceof Method) {    // if the object is type of method
                        int i = this.int_1;     // we invoke the method with the parameter objarr2[i] where i is greater than or equal to zero and objArr3
                        objArr2[this.int_3] = ((Method) obj).invoke(i >= 0 ? objArr2[i] : null, objArr3);
                    } else {
                        objArr2[this.int_3] = ((Constructor) obj).newInstance(objArr3); // other wise it create a new object
                    }
                } else if (c == 'm') {
                    set_value_of_int_1_2_3_arr_base_on_arg_i(13);
                    objArr2[this.int_3] = ((Class) objArr2[this.int_1]).getMethod((String) objArr2[this.int_2], copy_objarr_to_new_array_using_iArr_as_index(objArr2, this.int_arr));
                }
            } catch (Throwable unused) {
                return null;
            }
        }

        return objArr2[0];  // return the first element of the objet (string) array 
    }
}

///////// Keys  ///////////

String loginKey = "JHTfEpVUrX`3W?z=vZ77@-zDctA\\>-FgHDkLByaDNB)sjt`j^?Spsm*o9GsvR>XClSWn)Jp*bK3/4hax,Bx%k(nG[H8BiqTaTa8<QY6uz2@c-?z@G5R7P3R:1e3W-w-9gEM/(d[eYnPq)Rz&PT(_`b'uoU9UQjVk.g&@z9/A?2Ly4YYF`J]9)X<l\\_dW9Fes#rF[zuO5<wW6&cODcyXa;5NF;1=nG_pIdH]d,mKE=OC-7M:/H2T_E]DB=CP3]0DOYqAt<Ywb%;Z`Iwa-KZ7Qe/EumwQXY.0co#uimY@U'IpWj3bNX*e::Ig3Hsb(6d$%;w9hQ?J;_`_EX9eycAs@=9TwlQ:3D(xlYhmI*cs6%2q&f7Bsc1Fqp+Tk)hfF;#A;[CCsi4/KjjJ'wLoTX;/rLXM2?1qo`q>eh4]DQ6zaD/.Vqj$i^%yT[$0p[D')+P-w.+l7,^F6AwwzU";

String signupKey = "JHTfEpVUrX`3W?z=vZ77@-zDctA\\>-FgHDkLByaDNB%wSc@+1ag*s#Y3cLgU:wKJ`%N2:0v07#zffICb'uG#eFCr[$7Ev]Fiwkqq4`#k;%Mb*pJnR(T3YMv$Kd0*mBXU``OZvR7#2DoitmUJFyOVkw:5iE*9H3ggq+`>RojxsO:iEiMI$63?6Hqoy:f*iI1y:fKgddGM&HVC%-.Krn;LogxRuDsvs[T%Sa3V<(;t8Bqi)b`*I*<EI<_u7FbGL'Kd0<6S;GC^S\\A;I1c_Z@geTEa4;:#zi(\\hz,7w0op%Q&b*Vfm36iKn$?*=q1q$p\\X+y.k*-l\\V:h^:Tw:UUcYY<#.ycAS+//osRH6BL-T<0zt`X$')_Xb,wKi@q/'4nMe(Fl'D?:&x$3,):IS146</,P[d7-'bO7-H\\;j2\\MG$72v83rN<fGt?a;x]g@#TxUqmbbj(j.<5:G'J637Xu04*f`;k";

String webappSignupKey = "Jr(N(z91bEk@X*%/s0Xy&92)h;gX=&F@X.bK%JDX6s0:HfAf2[5l&+Lfq=Mye@<)AJmb%p+'M)8YGg7N\\z\\:u\\=slTa#u=xiGZWrGwaBSs2lb^IFQ(d^loHF:$zpe3G>R8bHpjl)Bc*'6Pu6sIb#MXQmenhOl4Je+RRt0X)H,/4vB;i[FQ-<2?@cV/>o?W/N6xo`V6AUwKvka[aG]I4-ji^)8-YDxfsIL0NC:3p2Y)Xif8K>v3&hvgM00],6JX=>px$$/K4cTvR^E*3ikmxy)j*,;9yUw\\rBmP`^)UEcL%1Y#(.EjtAvu,@j?d#BK[Kc-2ke7vVcNpHOS4\\dgV$1dgyz(ON)`fl/*:>)xX/cy*>aVXXde*tn\\0WtXrsMcXW,Z=x@l=;t4CrV9s8>YbPW6X$0357^M1]Nx&Bp>G/@r+lxl9I9\\^xj%4XCB\\L]cpR^,mnCD";


///// For Ex 

Signer obj = new Signer(loginKey);
String sigValue = obj.create("Email", "Password");