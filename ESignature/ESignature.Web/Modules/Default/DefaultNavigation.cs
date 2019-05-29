using MyPages = ESignature.Default.Pages;
using Serenity.Navigation;
[assembly: NavigationLink(int.MaxValue, "Location", typeof(MyPages.CompanyLocationsController), icon: "fa-cube")]
[assembly: NavigationLink(int.MaxValue, "Master", typeof(MyPages.CompanyLocationsController), icon: "fa-folder-o")]
[assembly: NavigationLink(int.MaxValue, "Location/Company Locations", typeof(MyPages.CompanyLocationsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Location/Location Master", typeof(MyPages.LocationMasterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Designations", typeof(MyPages.DesignationsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Division Master", typeof(MyPages.DivisionMasterController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Departments/Departments", typeof(MyPages.DepartmentsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Master/Departments/Sub Departments", typeof(MyPages.SubDepartmentsController), icon: null)]