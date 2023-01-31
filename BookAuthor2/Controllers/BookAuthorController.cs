﻿using BLL.DTOs;
using BLL.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BookAuthor2.Controllers
{
    [Route("api/bookAuthor")]
    [ApiController]
    public class BookAuthorController : ControllerBase
    {
        [HttpPost]
        public IActionResult Add(BookAuthorMapDTOs dto)
        {
            return Ok(new {status="success", data=BookAuthorMapServices.Add(dto)});
        }

        [HttpDelete("{authorId}/{bookId}")]
        public IActionResult Delete(int authorId, int bookId)
        {
            try
            {
                BookAuthorMapServices.Delete(authorId, bookId);
                return NoContent();
            }
            catch(Exception ex)
            {
                return BadRequest();
            }
        }
    }


}
