
namespace ESignature.Admin.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Admin/CompanyGroup"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyGroupRow))]
    public class CompanyGroupController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Admin/CompanyGroup/CompanyGroupIndex.cshtml");
        }
    }
}