using HienShopApi.Data;
using HienShopApi.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HienShopApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public UserController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetAllUser()
        {
            var users = await _dataContext.Users.ToListAsync();
            return Ok(users);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<List<User>>> GetUser(int id)
        {
            var users = await _dataContext.Users.FindAsync(id);
            if (users is null)
            {
                return NotFound("User Not Found");
            }
            return Ok(users);
        }
        [HttpPost]
        public async Task<ActionResult<List<User>>> AddUsers(User user)
        {
            _dataContext.Users.Add(user);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Users.ToListAsync());
        }
        [HttpPut]
        public async Task<ActionResult<List<User>>> UpdateUser(User updatedUser)
        {
            var dbUser = await _dataContext.Users.FindAsync(updatedUser.UserId);
            if (dbUser is null)
            {
                return NotFound("User not found");
            }
            dbUser.UserId = updatedUser.UserId;
            dbUser.Username = updatedUser.Username;
            dbUser.Password = updatedUser.Password;
            dbUser.Created_At = updatedUser.Created_At;
            dbUser.Updated_At = updatedUser.Updated_At;
            //dbCategory.Amount = updatedCategory.Amount;
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Users.ToListAsync());
        }
        [HttpDelete]
        public async Task<ActionResult<List<User>>> DeleteUser(int id)
        {
            var dbUser = await _dataContext.Users.FindAsync(id);
            if (dbUser is null)
            {
                return NotFound("User not found");
            }
            _dataContext.Users.Remove(dbUser);
            await _dataContext.SaveChangesAsync();
            return Ok(await _dataContext.Users.ToListAsync());
        }
    }
}
