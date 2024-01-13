namespace HienShopApi.Model
{
    public class Category
    {

        public int CategoryId { get; set; }
        public string CategoryName { get; set; } = string.Empty;
        public string CategoryDescription { get; set; } = string.Empty;
        public DateTime Created_At { get; set; } = DateTime.Now.AddHours(7);
        public DateTime Updated_At { get; set; } = DateTime.Now.AddHours(7);

    }
}
