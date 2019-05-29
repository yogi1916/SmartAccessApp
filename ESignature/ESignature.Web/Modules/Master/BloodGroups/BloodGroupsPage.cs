
namespace ESignature.Master.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Master/BloodGroups"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.BloodGroupsRow))]
    public class BloodGroupsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Master/BloodGroups/BloodGroupsIndex.cshtml");
        }
    }
}