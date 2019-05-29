
namespace ESignature.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/LocationMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.LocationMasterRow))]
    public class LocationMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/LocationMaster/LocationMasterIndex.cshtml");
        }
    }
}