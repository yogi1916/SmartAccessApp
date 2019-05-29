
namespace ESignature.CardManagement.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using ESignature.CardManagement.Entities;
    using SmartCommandControl.Northwind.Lookups;

    [FormScript("CardManagement.CardPool")]
    [BasedOnRow(typeof(Entities.CardPoolRow), CheckNames = true)]
    public class CardPoolForm
    {
        [Category("Card Master Data")]
        [LookupEditor(typeof(EmployeeLocationLookup))]
        public Int32 CompanyLocationId { get; set; }        
        [LookupEditor(typeof(MasterCardTechnologyRow))]
        [DisplayName("Card Technology")]
        public Int32 CardTechId { get; set; }
        public String CardCsnNo { get; set; }
        [LookupEditor(typeof(MasterCardUseTypeRow))]
        [DisplayName("Card Use Type")]
        public Int32 CardUseType { get; set; }
        [LookupEditor(typeof(MasterCardTypeRow))]
        [DisplayName("Card Type")]
        public Int32 CardType { get; set; }
        [LookupEditor(typeof(MasterCardStatusRow))]
        [DisplayName("Card Status")]
        public Int32 CardStatus { get; set; }
        [LookupEditor(typeof(MasterCardActivityRow))]
        [DisplayName("Card Activity")]
        public Int32 CardUsageStatus { get; set; }

        [MaxLength(10)]
        [IntegerEditor]
        [Category("Card Data")]
        public String CardNo { get; set; }
        [Visible(false)]
        public String CurrentlyAssignedTo { get; set; }
        [DateTimeEditor]
        public DateTime CardExpiryDate { get; set; }
        [Visible(false)]
        public String CardAuthType { get; set; }
        [Visible(false)]
        public Int32 NoOfDaysAllowedFromToday { get; set; }
        public String Remark { get; set; }
        [HtmlContentEditor]
        public String Description { get; set; }
        [Visible(false)]
        public DateTime LastModified { get; set; }
        [DefaultValue("now")]
        [DateTimeEditor]
        [ReadOnly(true)]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Int32 AddedBy { get; set; }       
    }
}