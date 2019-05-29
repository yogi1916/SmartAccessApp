
namespace ESignature.CardManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CardManagement/MasterCardStatus"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterCardStatusRow))]
    public class MasterCardStatusController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CardManagement/MasterCardStatus/MasterCardStatusIndex.cshtml");
        }
    }
}