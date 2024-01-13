namespace HienShopApi.Model
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; } = string.Empty;
        public string ProductDescription { get; set; } = string.Empty;
        public float Price { get; set; }
        public int Quantity { get; set; }
        public int CategoryId { get; set; }
        public string ImageUrl { get; set; } = string.Empty;

        public DateTime Created_At { get; set; } = DateTime.Now.AddHours(7);
        public DateTime Updated_At { get; set; } = DateTime.Now.AddHours(7);

    }
}
