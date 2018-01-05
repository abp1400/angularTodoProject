package data;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.databind.ObjectMapper;

import entities.Todo;
import entities.User;

@Transactional
@Repository
public class TodoDAOImpl implements TodoDAO {
	
	@PersistenceContext
	private EntityManager em;

	@Override
	public List<Todo> index(int uid) {

			String query = "SELECT DISTINCT t from Todo t WHERE t.user.id =:uid";
			List<Todo> result = em.createQuery(query, Todo.class).setParameter("uid", uid).getResultList();
			System.out.println(result.size());
			return result;
		}
	

	@Override
	public Todo show(int uid, int tid) {
		Todo t = em.find(Todo.class, tid);
		return t;
	}

	@Override
	public Todo create(int uid, String todoJson) {
		User assignedUser = em.find(User.class, uid);
		ObjectMapper mapper = new ObjectMapper();
		try {
			Todo newTodo = mapper.readValue(todoJson, Todo.class);
			newTodo.setUser(assignedUser);
			em.persist(newTodo);
			em.flush();
			return newTodo;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;

	}
	

	@Override
	public Todo update(int uid, int tid, String todoJson) {
		
			ObjectMapper mapper = new ObjectMapper();
			try {
				Todo tprime = mapper.readValue(todoJson, Todo.class);
				Todo managed = em.find(Todo.class, tid);
				managed.setTask(tprime.getTask());
				managed.setDescription(tprime.getDescription());
				managed.setCompleteDate(tprime.getCompleteDate());
				managed.setDueDate(tprime.getDueDate());
				managed.setUpdatedAt(tprime.getUpdatedAt());				
				return managed;
			} catch (Exception e) {
				e.printStackTrace();
				System.out.println("caught a bad break");
				return null;
			}	
		}
	

	@Override
	public Boolean destroy(int uid, int tid) {
		Todo t = em.find(Todo.class, tid);
		em.remove(t);
		if (em.find(Todo.class, tid) == null) {
			return true;
		} else {
			System.out.println("whoops!");
			return false;
			
		}
	}

}
