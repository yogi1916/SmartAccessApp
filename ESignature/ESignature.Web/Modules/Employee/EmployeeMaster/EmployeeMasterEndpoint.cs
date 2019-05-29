
using ESignature.Employee.Entities;

namespace ESignature.Employee.Endpoints
{
    using ESignature.AccessEmployee.Endpoints;
    using ESignature.AccessEmployee.Entities;
    using ESignature.CardManagement.Entities;
    using ESignature.CardManagement.Repositories;
    //using ESignature.Access.Entities;
    using ESignature.DAL;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.EmployeeMasterRepository;
    using MyRow = EmployeeMasterRow;

    [RoutePrefix("Services/Employee/EmployeeMaster"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class EmployeeMasterController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            //Step 1: Add data to Employee Master
            var data = new MyRepository().Create(uow, request);
            //Step 2: Add data to Employee function card CardPool + Employee Master
            EmployeeFunctionCardsRow row = new EmployeeFunctionCardsRow();
            row.CardNo = request.Entity.CardNo;
            row.CardType = 1;
            row.CreatedDateTime = DateTime.Now;
            row.EmployeeMasterId = Convert.ToInt32(data.EntityId);
            SaveRequest<EmployeeFunctionCardsRow> empRequest = new SaveRequest<EmployeeFunctionCardsRow>();
            empRequest.Entity = row;
            EmployeeFunctionCardsController saveRequest = new EmployeeFunctionCardsController();
            var EmployeeFunctionCardResponse = saveRequest.Create(uow, empRequest);
            // Step 3: Get CardPool master id to update cardpool data
            var connection = SqlConnections.NewFor<CardPoolRow>();
            var SQLCommand = "select CardPoolID FROM CardPool WHERE CardNo='" + request.Entity.CardNo + "'";
            var record = connection.Query<int>(SQLCommand);
            int CardPoolID = 0;
            foreach (var cal in record)
            {
                CardPoolID = Convert.ToInt32(cal);
            }
            // Step 4: Update Card Pool Data
            CardPoolRow empCardRow = new CardPoolRow();
            empCardRow.CardStatus = 1;
            empCardRow.CurrentlyAssignedTo = data.EntityId.ToString();
            SaveRequest<CardPoolRow> empcardRequest = new SaveRequest<CardPoolRow>();
            empcardRequest.Entity = empCardRow;
            empcardRequest.EntityId = CardPoolID;
            CardPoolRepository updateRequst = new CardPoolRepository();
            var CardpoolResponse = updateRequst.Update(uow, empcardRequest);
            return data;
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
            dict.Add("CompanyMasterID", LoginInfo.CompanyID);
            request.EqualityFilter = dict;
            //request.EqualityFilter = new System.Collections.Generic.Dictionary<string, object> { { "CompanyMasterID", LoginInfo.CompanyID } };
            return new MyRepository().List(connection, request);
        }
        public FileContentResult ListExcel(IDbConnection connection, ListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.EmployeeMasterColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "CustomerList_" +
                DateTime.Now.ToString("yyyyMMdd_HHmmss") + ".xlsx");
        }
    }
}
