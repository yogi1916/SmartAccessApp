
namespace ESignature.CardManagement.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CardManagement.CardPool")]
    [BasedOnRow(typeof(Entities.CardPoolRow), CheckNames = true)]
    public class CardPoolColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [Visible(false)]
        public Int32 CardPoolId { get; set; }
        [DisplayName("Location Name") ,Width(200)]
        public Int32 LocationName { get; set; }
        [EditLink]
        [DisplayName("Card No"), Width(200)]
        public String CardNo { get; set; }
        [DisplayName("Card Technology"), Width(200)]
        public String CardTechCardTechName { get; set; }
        [Visible(false)]
        public String CardCsnNo { get; set; }
        [DisplayName("Card Use Type"), Width(200)]
        public String CardUseTypeCardUseTypeName { get; set; }
        [DisplayName("Card Type"), Width(200)]
        public String CardTypeCardTypeName { get; set; }
        [DisplayName("Card Status"), Width(200)]
        public String CardStatus1 { get; set; }
        [DisplayName("Card Acivity"), Width(200)]
        public String CardUsageStatusActivity { get; set; }
        [DisplayName("Hold By"), Width(200)]
        public String CurrentlyAssignedTo { get; set; }
        [DisplayName("Expiry"), Width(200)]
        public DateTime CardExpiryDate { get; set; }
        [Visible(false)]
        public String CardAuthType { get; set; }
        [Visible(false)]
        public Int32 NoOfDaysAllowedFromToday { get; set; }
        [Visible(false)]
        public String Remark { get; set; }
        [Visible(false)]
        public String Description { get; set; }
        [Visible(false)]
        public DateTime LastModified { get; set; }
        [Visible(false)]
        public DateTime CreatedDateTime { get; set; }
        [Visible(false)]
        public Int32 AddedBy { get; set; }
                
    }
}