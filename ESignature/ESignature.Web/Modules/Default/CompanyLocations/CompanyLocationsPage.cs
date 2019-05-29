
namespace ESignature.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/CompanyLocations"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CompanyLocationsRow))]
    public class CompanyLocationsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/CompanyLocations/CompanyLocationsIndex.cshtml");
        }
    }
}