package school.sptech.autovault;

import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.web.bind.annotation.*;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

    @RestController
    @RequestMapping("/automoveis")
    @CrossOrigin
    public class AutomovelController {

        private final JdbcTemplate template;

        public AutomovelController(JdbcTemplate template) {
            this.template = template;
        }

        @PostMapping
        public ResponseEntity<Automovel> cadastrar(
                @RequestBody Automovel automovel
        ) {

            String sql = """
                INSERT INTO automovel
                (ano, modelo, categoria, marca, cor)
                VALUES (?, ?, ?, ?, ?)
                """;

            KeyHolder holder = new GeneratedKeyHolder();

            template.update(con -> {

                PreparedStatement statement = con.prepareStatement(
                        sql,
                        Statement.RETURN_GENERATED_KEYS
                );

                statement.setInt(1, automovel.getAno());
                statement.setString(2, automovel.getModelo());
                statement.setString(3, automovel.getCategoria());
                statement.setString(4, automovel.getMarca());
                statement.setString(5, automovel.getCor());

                return statement;

            }, holder);

            int idGerado = holder.getKey().intValue();

            automovel.setId(idGerado);

            return ResponseEntity.status(201).body(automovel);
        }

        @GetMapping
        public ResponseEntity<List<Automovel>> listar() {

            String sql = "SELECT * FROM automovel";

            List<Automovel> resultado = template.query(
                    sql,
                    new BeanPropertyRowMapper<>(Automovel.class)
            );
            System.out.println(resultado);
            return ResponseEntity.status(200).body(resultado);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> excluir(@PathVariable int id) {

            System.out.println("ID recebido: " + id);

            String sql = "DELETE FROM automovel WHERE id = ?";

            int linhasAfetadas = template.update(sql, id);

            System.out.println("Linhas excluídas: " + linhasAfetadas);

            if (linhasAfetadas == 0) {
                return ResponseEntity.status(404).build();
            }

            return ResponseEntity.status(204).build();
        }
}
