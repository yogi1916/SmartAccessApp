
namespace ESignature.CardManagement.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CardManagement/MasterCardTechnology"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MasterCardTechnologyRow))]
    public class MasterCardTechnologyController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CardManagement/MasterCardTechnology/MasterCardTechnologyIndex.cshtml");
        }
    }
}