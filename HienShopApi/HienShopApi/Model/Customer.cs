namespace ShopApi.Model
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string CustomerName { get; set; } = string.Empty;
        public DateTime Created_At { get; set; } = DateTime.Now.AddHours(7);
        public DateTime Updated_At { get; set; } = DateTime.Now.AddHours(7);
    }
}
