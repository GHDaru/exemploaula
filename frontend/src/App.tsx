import { useState } from 'react';
import {
  Container, TextField, Button, MenuItem, Typography, Box, Card, CardContent, CardActions, Chip, IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

type Priority = 'baixa' | 'média' | 'alta';

interface Task {
  id: number;
  title: string;
  description: string;
  responsible: string;
  priority: Priority;
}

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case 'baixa': return 'success';
    case 'média': return 'warning';
    case 'alta': return 'error';
    default: return 'default';
  }
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsible, setResponsible] = useState('');
  const [priority, setPriority] = useState<Priority>('baixa');

  const addTask = () => {
    if (!title || !responsible) return;
    const newTask: Task = { id: Date.now(), title, description, responsible, priority };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setResponsible('');
    setPriority('baixa');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4, maxWidth: '800px !important' }}>
      <Typography variant="h4" gutterBottom align="center">Gerenciador de Tarefas</Typography>
      
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4, p: 2, border: '1px solid #ccc', borderRadius: 2 }}>
        <TextField label="Título" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth />
        <TextField label="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} fullWidth multiline rows={2} />
        <TextField label="Responsável" value={responsible} onChange={(e) => setResponsible(e.target.value)} fullWidth />
        <TextField select label="Prioridade" value={priority} onChange={(e) => setPriority(e.target.value as Priority)} fullWidth>
          <MenuItem value="baixa">Baixa</MenuItem>
          <MenuItem value="média">Média</MenuItem>
          <MenuItem value="alta">Alta</MenuItem>
        </TextField>
        <Button variant="contained" onClick={addTask}>Adicionar Tarefa</Button>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {tasks.map(task => (
          <Card key={task.id}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">{task.title}</Typography>
                <Chip label={task.priority} color={getPriorityColor(task.priority)} size="small" />
              </Box>
              <Typography color="text.secondary">{task.description}</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>Responsável: {task.responsible}</Typography>
            </CardContent>
            <CardActions>
              <IconButton color="error" onClick={() => deleteTask(task.id)}><DeleteIcon /></IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Container>
  );
}

export default App;
