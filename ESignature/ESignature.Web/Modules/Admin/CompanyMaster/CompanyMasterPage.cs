
namespace ESignature.Admin.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Admin/CompanyMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyMasterRow))]
    public class CompanyMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Admin/CompanyMaster/CompanyMasterIndex.cshtml");
        }
    }
}