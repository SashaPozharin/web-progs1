let serverData = [24, "User", false, 85, -5, 0, 45, "google.com"];
let [url, digts, userInfo] = [serverData.filter((item, i)=>{return (typeof item == "string" && item == 'google.com')}), serverData.filter((item, i)=>{return typeof item == "number"}), serverData.filter((item, i)=>{return (typeof item == "string" && item !="google.com")})];
console.log(userInfo, digts, url);
