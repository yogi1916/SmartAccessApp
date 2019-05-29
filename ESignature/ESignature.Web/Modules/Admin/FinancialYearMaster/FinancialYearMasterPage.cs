
namespace ESignature.Admin.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Admin/FinancialYearMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.FinancialYearMasterRow))]
    public class FinancialYearMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Admin/FinancialYearMaster/FinancialYearMasterIndex.cshtml");
        }
    }
}