
namespace ESignature.CardManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CardManagement/MasterCardActivity"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterCardActivityRow))]
    public class MasterCardActivityController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CardManagement/MasterCardActivity/MasterCardActivityIndex.cshtml");
        }
    }
}