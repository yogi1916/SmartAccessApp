
namespace ESignature.CardManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CardManagement/CardPool"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CardPoolRow))]
    public class CardPoolController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CardManagement/CardPool/CardPoolIndex.cshtml");
        }
    }
}