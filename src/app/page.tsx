import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
    return (
        <div>
            <Button size={'xs'}>Primary</Button>
            <Button variant={'secondary'}>Secondary</Button>
            <Button variant={'destructive'}>Destructive</Button>
            <Button variant={'ghost'}>Ghost</Button>
            <Button variant={'link'}>Link</Button>
            <Button variant={'outline'}>Ouline</Button>
            <Button variant={'outline'}>Ouline</Button>
            <Input></Input>
        </div>
    );
}
