package com.example.p02.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import com.example.p02.model.Task;
import com.example.p02.service.TaskService;
import jakarta.validation.Valid;
import java.util.List;
import java.util.Optional;

@Controller
@RestController
@Tag(name = "Task", description = "Operaciones relacionadas con las tareas")
@RequestMapping({"/tasks"})
public class TaskController {
  private final TaskService taskService;

  public TaskController(@Autowired TaskService taskService) {
    this.taskService = taskService;
  }

  @GetMapping({ "/all" })
  public ResponseEntity<List<Task>> getTask() {
    return ResponseEntity.ok(taskService.getTask());
  }

  @GetMapping({ "/{id}" })
  public ResponseEntity<Optional<Task>> getTask(@PathVariable Long id) {
    return ResponseEntity.ok(taskService.getTask(id));
  }

  @GetMapping("/listado") // @Controller
  public String listar(Model model) {
    model.addAttribute("titulo", "Listado de Task");
    model.addAttribute("task", taskService.getTask());
    return "lista"; // lista.html
  }
  
  @GetMapping("/eliminar/{id}") // Eliminar Boton
  public String eliminar(@PathVariable Long id, Model model) {
    if (id > 0) {
      taskService.eliminar(id);
    }
    return "redirect:/listado"; // equivalente a @GetMapping ("/listado")
  }

  @GetMapping("/form/{id}") // Editar Cliente boton
  public String actualizar(@PathVariable Long id, Model model) {
    Optional<Task> task = null;
    if (id > 0) {
      task = taskService.getTask(id);
      System.out.println("No. de task: " + task.get().getIdTask());
    } else {
      return "redirect:listado";
    }

    model.addAttribute("task", task);
    return "form";
  }
}

  /* 
  @GetMapping("/form") // "Crear cliente" Boton
  public String crear(Model model) {
    String edoCivil[] = { "Soltero", "Casado", "Divorciado" };
    
    // List<String> edoCivil= new ArrayList<String>();
    // edoCivil.add("Soltero");
    // edoCivil.add("Casado");
    // edoCivil.add("Divorciado");

    model.addAttribute("titulo", "Formulario new cliente");
    model.addAttribute("cliente", new Cliente());
    // model.addAttribute("edoCivil", edoCivil);
    System.out.println("Dentro de forma");
    return "form";
  }

  @PostMapping("/form")   // Enviar
  public String guardar(@Valid Cliente cliente, BindingResult br, Model model) {
    if (br.hasErrors()) {
      model.addAttribute("titulo", "Formulario de cliente");
      return "form";
    } // redirige a la pagina /listar guardando los cambios con 'redirect:'
    clienteService.guardar(cliente);
    return "redirect:listado";
  }
 


  */
    @Operation(summary = "Obtener todas las tareas")
    @GetMapping("/tasks")
    public ResponseEntity<List<Task>> listTasks() {
        List<Task> tasks = taskService.getTasks();
        return ResponseEntity.ok(tasks);
    }

    @Operation(summary = "Obtener una tarea por ID")
    @GetMapping("/tasks/{id}")
    public ResponseEntity<Optional<Task>> getTask(@PathVariable Long id) {
        return ResponseEntity.ok(taskService.getTask(id));
    }

    @Operation(summary = "Eliminar una tarea por ID")
    @DeleteMapping("/tasks/delete/{id}")
    public String deleteTask(@PathVariable Long id) {
        taskService.deleteTask(id);
        return "redirect:/tasks";
    }

    @Operation(summary = "Editar una tarea por ID")
    @PutMapping("/tasks/edit/{id}")
    // @ResponseStatus(HttpStatus.NO_CONTENT)
    public Task editTask(@PathVariable Long id, @RequestBody Task task) {
        // taskService.editTask(id, task);
        return task;
    }
    
    // @Operation(summary = "Crear una nueva tarea")
    // @PostMapping("/tasks/new")
    // public String createTaskForm(Model model) {

    // }

    // @Operation(summary = "Guardar una tarea")
    // @PostMapping("/tasks")
    // public String saveTask(@Valid Task task, BindingResult result, Model model) {
       
    // }
}
