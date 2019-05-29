
namespace ESignature.CardManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CardManagement/MasterCardUseType"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterCardUseTypeRow))]
    public class MasterCardUseTypeController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CardManagement/MasterCardUseType/MasterCardUseTypeIndex.cshtml");
        }
    }
}