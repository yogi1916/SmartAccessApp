
namespace ESignature.Default.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Default/Designations"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.DesignationsRow))]
    public class DesignationsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Default/Designations/DesignationsIndex.cshtml");
        }
    }
}