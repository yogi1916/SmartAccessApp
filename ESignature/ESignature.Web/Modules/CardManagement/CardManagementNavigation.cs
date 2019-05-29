using Serenity.Navigation;
using MyPages = ESignature.CardManagement.Pages;

//[assembly: NavigationLink(int.MaxValue, "CardManagement/Master Card Technology", typeof(MyPages.MasterCardTechnologyController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "CardManagement/Master Card Use Type", typeof(MyPages.MasterCardUseTypeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "CardManagement/Master Card Type", typeof(MyPages.MasterCardTypeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "CardManagement/Master Card Activity", typeof(MyPages.MasterCardActivityController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CardManagement", typeof(MyPages.CardPoolController), icon: "fa-credit-card")]
[assembly: NavigationLink(int.MaxValue, "CardManagement/Card Pool", typeof(MyPages.CardPoolController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "CardManagement/Master Card Status", typeof(MyPages.MasterCardStatusController), icon: null)]