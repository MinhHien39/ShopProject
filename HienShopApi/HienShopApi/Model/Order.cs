namespace HienShopApi.Model
{
    public class Order
    {
        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public string Status { get; set; }
        public float TotalPrice { get; set; }

        public DateTime Created_At { get; set; } = DateTime.Now.AddHours(7);
        public DateTime Updated_At { get; set; } = DateTime.Now.AddHours(7);
    }
}
