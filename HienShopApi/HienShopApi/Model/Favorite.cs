using Microsoft.AspNetCore.Hosting.Server;

namespace HienShopApi.Model
{
    public class Favorite
    {
        public int FavoriteId { get; set; }
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public int UserId { get; set; }
    }
}
