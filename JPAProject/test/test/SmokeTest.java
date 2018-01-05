package test;


import static org.junit.Assert.assertEquals;

import java.sql.Date;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;


import entities.User;
import entities.Todo;

public class SmokeTest {
	EntityManagerFactory emf;
	EntityManager em;
	

	@Before
	public void set_up() { 

	 this.emf = Persistence.createEntityManagerFactory("YourPU");
	 this.em = emf.createEntityManager();

	}
	@After
	public void tear_down() { 
	em.close();
	emf.close();
		
	}
	
	@Test
	public void smoke_test() {
		boolean test = true;
		assertEquals(true, test);
	}
	
	@Test
	public void mapTest() {
		User u = em.find(User.class, 1);
		String email = "bill@nike.com";
		assertEquals(email,u.getEmail());
	}
	
//	@Test
//	public void usertoTodosMap() {
//		
//		User u = em.find(User.class,1);
//		assertEquals(3,u.getTodos().size());
//	}
	
	@Test
	public void TodostoUserMap() {
		Todo t = em.find(Todo.class,2);
		assertEquals(1,t.getUser().getId());
		
		
	}

//@Test
//public void QuiztoQuestionmapTest() {
// Payment p2 = em.find(Payment.class, 3);
//	assertEquals(20.5,p2.getGallon(),0.1);
//	}
	
//	@Test
//	public void AnswertoQuestion() {
//		Answer a = em.find(Answer.class, 9);
//		assertEquals(3,a.getQuestion().getId());
//		
//	} 
//	@Test
//	public void QuestiontoAnswer() {
//		Question q = em.find(Question.class, 10);
//		assertEquals(2,q.getAnswers().size());
//		
//	} 
	
}