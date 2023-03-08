import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ParticlesBg from "particles-bg";
import { useState } from "react";
import Swal from "sweetalert2";
import "./Home.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const [nama, setNama] = useState("");
  const [date, setDate] = useState("");
  const [today] = useState(new Date().toISOString().split("T")[0]);

    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (date === today) {
      Swal.fire({
        text: `HELLO ${nama} WE WISH YOU A HAPPY BIRTHDAY ON ${date}`,
        imageUrl: "happy.gif",
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: "Ulang Tahun",
        timer: 3000,
      });

      navigate("/gift")


    } else if (date !== today) {
      Swal.fire("Maaf, Anda belum dapat hadiah sekarang");
    } else {
      console.log("error nih");
    }
  };

  return (
    <>
      <div>
        <ParticlesBg type="color" bg={true} />
        <h1>Apakah Hari Ini Ulang Tahunmu ?</h1>
      </div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Nama</strong>
            </Form.Label>
            <Form.Control
              type="text"
              value={nama}
              onChange={(event) => setNama(event.target.value)}
              placeholder="Nama"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Tanggal Ulang Tahun</strong>
            </Form.Label>
            <Form.Control
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            <strong>Cek Sekarang</strong>
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Home;
