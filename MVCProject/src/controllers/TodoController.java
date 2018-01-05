package controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import data.TodoDAO;
import entities.Todo;

@RestController
public class TodoController {

	@Autowired
	private TodoDAO dao;

	@RequestMapping(path = "user/{uid}/todos", method = RequestMethod.GET)
	public List<Todo> index(@PathVariable int uid) {
		return dao.index(uid);

	}

	@RequestMapping(path = "user/{uid}/todos/{tid}", method = RequestMethod.GET)
	public Todo show(@PathVariable int uid, @PathVariable int tid, HttpServletResponse res) {
		Todo t = dao.show(uid, tid);
		if (t == null) {
			res.setStatus(404);
		}

		if (t.getUser().getId() != uid) {
			res.setStatus(401);
			return null;
		}
		res.setStatus(201);
		return t;
	}

	@RequestMapping(path = "user/{uid}/todos", method = RequestMethod.POST)
	public Todo create(@PathVariable int uid, @RequestBody String json, HttpServletResponse res) {
		Todo t = dao.create(uid, json);
		if (t == null) {
			res.setStatus(400);

		} else {
			res.setStatus(201);
		}
		return t;
	}

	@RequestMapping(path = "user/{uid}/todos/{tid}", method = RequestMethod.PUT)
	public Todo update(@RequestBody String json, HttpServletResponse res, @PathVariable int uid,
			@PathVariable int tid) {
		Todo t = dao.update(uid, tid, json);
		if (t == null) {
			res.setStatus(400);
		} else {
			res.setStatus(200);
		}
		return t;
	}

	@RequestMapping(path = "user/{uid}/todos/{tid}", method = RequestMethod.DELETE)
	public Boolean delete(HttpServletResponse res, @PathVariable int uid, @PathVariable int tid) {
		Boolean b = dao.destroy(uid, tid);
		if (b==null) {
			res.setStatus(404);
			return b;
		}
		
		if (b == false) {
			res.setStatus(422);
			return b;
		} else {

			res.setStatus(200);
			return true;
		}
	}
}
