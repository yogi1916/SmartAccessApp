
namespace ESignature.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/MaretialStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MaretialStatusRow))]
    public class MaretialStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/MaretialStatus/MaretialStatusIndex.cshtml");
        }
    }
}