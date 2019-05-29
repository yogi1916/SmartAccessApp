
namespace ESignature.CardManagement.Endpoints
{
    using ESignature.DAL;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.CardPoolRepository;
    using MyRow = Entities.CardPoolRow;

    [RoutePrefix("Services/CardManagement/CardPool"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class CardPoolController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            request.Entity.CardNo = request.Entity.CardNo.PadLeft(10, '0');
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            System.Collections.Generic.Dictionary<string, object> dict = new System.Collections.Generic.Dictionary<string, object>();
            if (LoginInfo.Locations != null)
            {
                dict.Add("CompanyLocationId", LoginInfo.Locations);
            }
            dict.Add("CompanyLocationCompanyMasterId", LoginInfo.CompanyID);
            request.EqualityFilter = dict;

            return new MyRepository().List(connection, request);
        }
    }
}
