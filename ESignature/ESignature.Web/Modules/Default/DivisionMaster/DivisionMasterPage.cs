
namespace ESignature.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/DivisionMaster"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DivisionMasterRow))]
    public class DivisionMasterController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/DivisionMaster/DivisionMasterIndex.cshtml");
        }
    }
}