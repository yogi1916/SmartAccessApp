
namespace ESignature.CardManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CardManagement/MasterCardType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterCardTypeRow))]
    public class MasterCardTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CardManagement/MasterCardType/MasterCardTypeIndex.cshtml");
        }
    }
}