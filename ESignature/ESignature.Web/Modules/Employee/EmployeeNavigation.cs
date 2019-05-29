using Serenity.Navigation;
using MyPages = ESignature.Employee.Pages;
[assembly: NavigationLink(int.MaxValue, "Employee", typeof(MyPages.EmployeeMasterController), icon: "fa-credit-card")]
[assembly: NavigationLink(int.MaxValue, "Employee/Employee Master", typeof(MyPages.EmployeeMasterController), icon: null)]