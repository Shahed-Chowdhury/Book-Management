using BLL.DTOs;
using BLL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAuthor2.Controllers
{
    [Route("api/author")]
    [ApiController]
    public class AuthorController : ControllerBase
    {
        // ----------------------------------------------- Add an author -------------------------------------------------
        [HttpPost("add")]
        public IActionResult Add(AuthorDTO3 dto)
        {
            try
            {
                return Ok(new { status="success", data=AuthorServices.Add(dto) });
            }
            catch(Exception ex)
            {
                return BadRequest(new { status="failed", message=ex.Message });
            }
        }

        // ----------------------------------------------- Get all authors -------------------------------------------------
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(new { status = "success", data = AuthorServices.Get() });

            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

        // ----------------------------------------------- Get all authors -------------------------------------------------
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(new { status = "success", data = AuthorServices.Get(id) });
            }
            catch (Exception ex)
            {
                return StatusCode(500);
            }
        }

        // ----------------------------------------------- Update an author -------------------------------------------------
        [HttpPatch("edit")]
        public IActionResult Update(AuthorDTO3 dto)
        {
            try
            {
                return Ok(new { status="success", data=AuthorServices.Update(dto)});
            }
            catch (Exception ex)
            {
                return BadRequest(new { status = "Failed", message = ex.Message });
            }
        }


        // ----------------------------------------------- Delete an author -------------------------------------------------
        [HttpDelete("{Id}")]
        public IActionResult Delete(int Id)
        {
            try
            {
                var data = AuthorServices.Delete(Id);
                return StatusCode(203);
            }
            catch (Exception ex)
            {
                return BadRequest(new {status="Failed", message="Unable to delete author or author not available"});
            }
        }

        // ----------------------------------------------- Get books by authors -------------------------------------------------
        [HttpGet("getbooks/{Id}")]
        public IActionResult GetBooks(int Id)
        {
            try
            {
                return Ok(new { status = "Success", data=AuthorServices.GetBooks(Id) });
            }
            catch (Exception ex)
            {
                return BadRequest(new { status = "Failed", message=ex.Message });
            }
        }


    }
}
