namespace HienShopApi.Model
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public DateTime Created_At { get; set; } = DateTime.Now.AddHours(7);
        public DateTime Updated_At { get; set; } = DateTime.Now.AddHours(7);

    }
}
