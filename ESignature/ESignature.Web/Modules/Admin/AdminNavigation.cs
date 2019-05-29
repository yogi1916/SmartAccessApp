using Serenity.Navigation;
using MyPages = ESignature.Admin.Pages;

[assembly: NavigationLink(int.MaxValue, "Admin", typeof(MyPages.CompanyGroupController), icon: "fa-shopping-cart")]
[assembly: NavigationLink(int.MaxValue, "Admin/Company Group", typeof(MyPages.CompanyGroupController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Admin/Company Master", typeof(MyPages.CompanyMasterController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Admin/Financial Year Master", typeof(MyPages.FinancialYearMasterController), icon: null)]