function checkemail(str){
var emailFilter=/^.+@.+\..{2,3}$/;
var str=document.emailform.email.value;
if (!(emailFilter.test(str))) {
alert ("ท่านใส่อีเมล์ไม่ถูกต้อง");
return false;

}
return true;
}
