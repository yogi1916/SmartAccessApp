
namespace ESignature.Default.Endpoints
{
    using ESignature.DAL;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.DepartmentsRepository;
    using MyRow = Entities.DepartmentsRow;

    [RoutePrefix("Services/Default/Departments"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class DepartmentsController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
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

           // request.EqualityFilter = new System.Collections.Generic.Dictionary<string, object> { { "CompanyLocationCompanyMasterId", LoginInfo.CompanyID } };
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.DepartmentsColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "CustomerList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
