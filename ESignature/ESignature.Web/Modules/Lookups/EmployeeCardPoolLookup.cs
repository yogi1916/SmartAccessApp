
namespace SmartCommandControl.Northwind.Lookups
{
    using ESignature.CardManagement.Entities;
    using ESignature.DAL;
    using ESignature.Default.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript(Expiration = -1)]
    public class EmployeeCardPoolLookup : RowLookupScript<CardPoolRow>
    {
        public EmployeeCardPoolLookup()
        {
            IdField = CardPoolRow.Fields.CardNo.PropertyName;
            TextField = CardPoolRow.Fields.CardNo.PropertyName;
            Expiration = TimeSpan.FromDays(-1);
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            if (LoginInfo.CompanyID == null || LoginInfo.CompanyID == 0)
            {
                var fld = CardPoolRow.Fields;
                query.Distinct(true)
                    .Select(fld.CardPoolId, fld.CardNo)
                     .Where(fld.CardStatus == 0);
            }
            else
            {
                if (LoginInfo.Locations == null)
                {
                    var fld = CardPoolRow.Fields;
                    query.Distinct(true)
                        .Select(fld.CardPoolId, fld.CardNo)
                           .Where(fld.CompanyLocationCompanyMasterId == LoginInfo.CompanyID.ToString() && fld.CardStatus==0);
                }
                else
                {
                    var fld = CardPoolRow.Fields;
                    query.Distinct(true)
                        .Select(fld.CardPoolId, fld.CardNo)
                           .Where(fld.CompanyLocationCompanyMasterId == LoginInfo.CompanyID.ToString() && fld.CompanyLocationId.In(LoginInfo.Locations) && fld.CardStatus == 0);
                }
            }
        }

        protected override void ApplyOrder(SqlQuery query)
        {
            base.ApplyOrder(query);
        }
    }
}