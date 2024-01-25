using HienShopApi.Data;
using HienShopApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HienShopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public FavoriteController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Favorite>>> GetAllFavorite()
        {
            var favorites = await _dataContext.Favorites.ToListAsync();
            return Ok(favorites);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<Favorite>>> GetFavorite(int id)
        {
            var favorite = await _dataContext.Categories.FindAsync(id);
            if (favorite is null)
            {
                return NotFound("Category Not Found");
            }
            return Ok(favorite);
        }
        [HttpPost]
        public async Task<ActionResult<List<Favorite>>> AddFavorite(Favorite favorite)
        {
            _dataContext.Favorites.Add(favorite);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Favorites.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<Favorite>>> UpdateFavorite(Favorite updatedFavorite)
        {
            var dbFavorite = await _dataContext.Favorites.FindAsync(updatedFavorite.FavoriteId);
            if (dbFavorite is null)
            {
                return NotFound("Favorite not found");
            }
            dbFavorite.FavoriteId = updatedFavorite.FavoriteId;
            dbFavorite.ProductId = updatedFavorite.ProductId;
            dbFavorite.CategoryId = updatedFavorite.CategoryId;
            dbFavorite.UserId = updatedFavorite.UserId;

            //dbCategory.Amount = updatedCategory.Amount;
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Favorites.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<Favorite>>> DeleteFavorite(int id)
        {
            var dbFavorite = await _dataContext.Favorites.FindAsync(id);
            if (dbFavorite is null)
            {
                return NotFound("Favorite not found");
            }
            _dataContext.Favorites.Remove(dbFavorite);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Favorites.ToListAsync());
        }
    }
}
