'use client';

// Libraries
import { useState } from 'react';
import Image from 'next/image';

// UI Components
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '~/components/ui/drawer';

// Components
import { AddCardForm } from './add-card-form';

// Hooks
import { useMediaQuery } from '~/hooks/useMediaQuery';

// Open a dialog on desktop and a drawer on mobile
function AddCardDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="sm">
            <Image
              src="/assets/images/icons/add.png"
              width={16}
              height={16}
              alt="Add"
              className="mr-2"
            />
            New Card
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Card</DialogTitle>
            <DialogDescription>
              We&apos;ve pre filled the important details for you. Just give us
              your name and you&apos;re good to go
            </DialogDescription>
          </DialogHeader>

          <AddCardForm closeDialog={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button size="sm">
          <Image
            src="/assets/images/icons/add.png"
            width={16}
            height={16}
            alt="Add"
            className="mr-2"
          />
          New Card
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add New Card</DrawerTitle>
          <DrawerDescription>
            We&apos;ve filled out most of the fields for you. Just fill the
            remaining fields and you&apos;re good to go
          </DrawerDescription>
        </DrawerHeader>
        <AddCardForm closeDialog={() => setOpen(false)} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default AddCardDialog;
